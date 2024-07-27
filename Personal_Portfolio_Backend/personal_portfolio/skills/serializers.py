from rest_framework.serializers import ModelSerializer
from .models import Skill



class SkillSerializer(ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'#importa toda la data
        # fields = (
        #     'user',
        #     'title',
        # )

