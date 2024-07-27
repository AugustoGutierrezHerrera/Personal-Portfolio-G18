from django.db import models
from users.models import User


class Experience(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, null=True, blank=True)    
    title = models.CharField(max_length=255, null=True, blank=True)
    description = models.CharField(null=True, blank=True)
    company = models.CharField(max_length=255, null=True, blank=True)
    date = models.DateField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return f'{self.title} - {self.user}'

    class Meta:
        db_table ='experience'
