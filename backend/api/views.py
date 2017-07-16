# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from api.models import Drink, Rate, Like, Visitor
from rest_framework import status
from rest_framework import viewsets
from django.shortcuts import get_object_or_404
from rest_framework.decorators import detail_route, list_route
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from django.db.models import Count, Sum, F
from django.core import serializers
from api.serializers import DrinkSerializer


class DrinkViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows drinks to be viewed or edited.
    """
    queryset = Drink.objects.all()
    serializer_class = DrinkSerializer
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('type', 'flavour', 'brand', 'rates__visitor__email')

    def get_queryset(self):
        return Drink.objects.annotate(
            total_likes=Count('likes__id'),
            total_rate=Sum('rates__rate') / Count('rates__rate')
        ).order_by('-total_rate')
		
    def get_object(self):
        queryset = self.get_queryset()
        drink = get_object_or_404(queryset, pk=self.kwargs['pk'])
        return drink
	
    @detail_route(methods=['post'])
    def like_drink(self, request, pk=None):
        try:
            drink = self.get_object()
            visitor = Visitor.objects.get_or_create(email=request.data.get('email'))[0]
            
            if not drink.likes.filter(visitor=visitor).exists():
                like = Like.objects.create(visitor=visitor)        
                drink.likes.add(like)
                drink.save()
                return Response(DrinkSerializer(self.get_object()).data)
            return Response({ 'alreadyLiked': True }, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({ 'error': str(e) }, status=status.HTTP_400_BAD_REQUEST)

    @detail_route(methods=['post'])    
    def rate_drink(self, request, pk=None):
        try:	
            rate_data = request.data.get('rate')
            drink = self.get_object()
            visitor = Visitor.objects.get_or_create(email=request.data.get('email'))[0]

            if not drink.rates.filter(visitor=visitor).exists():
                rate = Rate.objects.create(visitor=visitor, rate=rate_data)        
                drink.rates.add(rate)
                drink.save()
                return Response(DrinkSerializer(self.get_object()).data)
            return Response({ 'alreadyRated': True }, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({ 'error': str(e) }, status=status.HTTP_400_BAD_REQUEST)
