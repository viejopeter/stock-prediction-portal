from django.shortcuts import render
from rest_framework.permissions import AllowAny
from .serializers import UserSerializer
from rest_framework import generics
from django.contrib.auth.models import User


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]