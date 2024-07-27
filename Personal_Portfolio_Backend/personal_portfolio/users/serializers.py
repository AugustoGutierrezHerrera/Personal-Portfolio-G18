from rest_framework.serializers import ModelSerializer, Serializer, EmailField, CharField
from .models import User
from django.contrib.auth.hashers import make_password

# La mision de el, es verificar que los campos que estamos recibiendo solo sean el email y el password


class UserLoginSerializer(Serializer):
    email = EmailField(required=True)
    password = CharField(required=True)


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        # fields = '__all__'#importa toda la data
        fields = (
            'id',
            'email',
            'password'
        )

    def create(self, validated_data):
        if 'password' in validated_data:
            validated_data['password'] = make_password(
                validated_data['password'])
        return super().create(validated_data)


class UserDataSerializer(ModelSerializer):
    class Meta:
        model = User
        # fields = '__all__'#importa toda la data
        fields = (
            'email',
            'photoPerfilUrl',
            'name',
            'lastName',
            'photoPresentationUrl',
            'photoPortadaUrl',
            'cell',
            'titleAboutMy',
            'descriptionAboutMy',
            'shortDescriptionAboutMy',
            'descriptionSkills',
            'githabURL',
            'instagramURL',
            'linkedinURL',
            'twitterURL',
        )
