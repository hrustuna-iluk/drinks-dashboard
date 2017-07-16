# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models


class Drink(models.Model):
    type = models.CharField(max_length=255)
    flavour = models.CharField(max_length=255)
    brand = models.CharField(max_length=255)
    rates = models.ManyToManyField('Rate')
    likes = models.ManyToManyField('Like')


class Visitor(models.Model):
    email = models.EmailField(unique=True)


class Like(models.Model):    
    visitor = models.ForeignKey(Visitor)


class Rate(models.Model):
    visitor = models.ForeignKey(Visitor)
    rate = models.IntegerField()
