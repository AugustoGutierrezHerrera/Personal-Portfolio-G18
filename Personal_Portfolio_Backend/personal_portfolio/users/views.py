from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView
from rest_framework.response import Response
# from rest_framework.permissions import IsAuthenticated
from .models import User
from .serializers import UserSerializer,UserDataSerializer,UserLoginSerializer
from django.contrib.auth.hashers import check_password
from .utils import get_tokens_for_user

class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDataViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserDataSerializer


class AuthenticationView(APIView):
    def post(seft, request):

        # request.data es la informacion que recibimos del cliente
        user_request = UserLoginSerializer(data=request.data)
        if not user_request.is_valid():        
            return Response({"message:":user_request.errors}, status= 401)
        

        #buscar el usuario por el correo
        user = User.objects.get(email = user_request.data['email'])
        if not user:
            return Response({"message:":"Email y/0 password incirrecto1s"}, status= 401) 
        
        #comparar que el password sea correcto
        user_serializer = UserSerializer(user).data
        if not check_password(user_request.data['password'], user_serializer.get('password')):
            return Response({"message:": "Email y/o password incorrectos2"}, status=401)
        

        tokens= get_tokens_for_user(user)
        

        return Response({
            "user": user_serializer,
            "access_token": tokens['access'],
            "refresh_token": tokens['refresh']
        })
    


    