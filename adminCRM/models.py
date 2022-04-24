from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    pass


class CardPopulate(models.Model):

    class Meta:
        verbose_name = 'Card Populate'
        verbose_name_plural = 'Card Populate Rows'

    # Orders card
    quantity = models.IntegerField(default=1)
    icon = models.ImageField()
    text = models.CharField(max_length=90)
    percent = models.FloatField()

    def __str__(self):
        return str(self.text)
