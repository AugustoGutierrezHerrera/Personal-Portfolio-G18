from rest_framework.routers import DefaultRouter
from .views import UserViewSet, AuthenticationView,UserDataViewSet
from django.urls import path

# crear una instancia de DefaultRouter
router = DefaultRouter()

# agregar una ruta usando router
router.register(r'users', UserViewSet)
router.register(r'usersdata', UserDataViewSet, basename='user-data')



urlpatterns = [
    path(r'login', AuthenticationView.as_view(), name='custom_login'),
    *router.urls
]