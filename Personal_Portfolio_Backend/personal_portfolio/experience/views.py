from rest_framework.viewsets import ModelViewSet
from .models import Experience
from .serializers import ExperienceSerializer


class ExperienceViewSet(ModelViewSet):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer