from .models import Project
from rest_framework.serializers import ModelSerializer

class ProjectSerializer(ModelSerializer):
    class Meta:
        model=Project
        fields = '__all__'#importa toda la data
        # fields = (
        #     'id',
        #     'user',
        #     'title',
        #     'description',
        #     'client',
        #     'date',
        #     'role',
        #     'demoUrl',
        #     'viewUrl',
        #     'githabURL',
        #     'imgUrl',

        # )
