

from django.contrib import admin
from django.urls import path, include
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework.permissions import AllowAny

schema_view = get_schema_view(
    openapi.Info(
        title='Django API Personal Portfolio',
        default_version='v1',
        description='API Personal Portfolio',
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email='augusto@gmail.com'),
        license=openapi.License(name="MIT")
    ),
    public=True,
    permission_classes=(AllowAny,)
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include('experience.urls')),
    path('api/v1/', include('projects.urls')),
    path('api/v1/', include('skills.urls')),
    path('api/v1/', include('users.urls')),
     path('swagger/', schema_view.with_ui('swagger',
         cache_timeout=0), name='swagger-api')
]
