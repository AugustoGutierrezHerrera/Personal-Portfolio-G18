from django.db import models
from users.models import User


class Project(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, null=True, blank=True)
    title = models.CharField(max_length=255, null=True, blank=True)
    description = models.CharField(null=True, blank=True)
    client = models.CharField(max_length=255, null=True, blank=True)
    date = models.DateField(max_length=255, null=True, blank=True)
    role = models.CharField(max_length=255, null=True, blank=True)
    demoUrl = models.CharField(null=True, blank=True)
    viewUrl = models.CharField(null=True, blank=True)
    githabURL = models.CharField(null=True, blank=True)
    imgUrl = models.CharField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return f'{self.title} - {self.user}'

    class  Meta:
        db_table = 'projects'