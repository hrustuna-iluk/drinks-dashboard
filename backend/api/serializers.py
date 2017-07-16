from api.models import Drink
from rest_framework import serializers


class DrinkSerializer(serializers.ModelSerializer):
    total_likes = serializers.IntegerField(read_only=True)
    total_rate = serializers.IntegerField(read_only=True)
	
    class Meta:
        model = Drink
        fields = ('id', 'type', 'flavour', 'brand', 'total_likes', 'total_rate',)
