from django.db import models


# Create your models here.
class Passenger(models.Model):
    firstName = models.IntegerField(primary_key=True)
    lastName = models.CharField(max_length=20)
    travelPoints = models.DecimalField(max_digits=10, decimal_places=3)

    def __str__(self):
        return self.firstName + self.lastName + self.travelPoints
