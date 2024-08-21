from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    Aura = models.IntegerField(default=0) # Aura is the currency of the app
    
    