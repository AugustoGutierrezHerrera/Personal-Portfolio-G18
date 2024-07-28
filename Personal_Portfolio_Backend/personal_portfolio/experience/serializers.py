from .models import Experience
from rest_framework.serializers import ModelSerializer

class ExperienceSerializer(ModelSerializer):
    class Meta:
        model=Experience
        fields = '__all__'#importa toda la data
        # fields = (
        #     'user',
        #     'title',
        #     'description',
        #     'company',
        #     'date',
        # )

