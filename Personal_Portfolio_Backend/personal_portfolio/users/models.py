from django.db import models


class User(models.Model):
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=300)
    photoPerfilUrl = models.CharField(max_length=300, null=True, blank=True )
    photoPresentationUrl = models.CharField(max_length=300, null=True, blank=True )
    name = models.CharField(max_length=255, null=True, blank=True)
    lastName = models.CharField(max_length=255, null=True, blank=True)
    photoPortadaUrl = models.CharField(null=True, blank=True)
    cell = models.CharField(max_length=255,null=True, blank=True)
    titleAboutMy = models.CharField(max_length=255,null=True, blank=True)
    descriptionAboutMy = models.CharField(null=True, blank=True)
    shortDescriptionAboutMy = models.CharField(null=True, blank=True)
    descriptionSkills = models.CharField(null=True, blank=True)
    githabURL = models.CharField(null=True, blank=True)
    instagramURL = models.CharField(null=True, blank=True)
    linkedinURL = models.CharField(null=True, blank=True)
    twitterURL = models.CharField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.email


    # Nombre de la tabla
    class Meta:
        db_table = 'users'