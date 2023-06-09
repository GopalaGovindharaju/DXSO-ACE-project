from rest_framework.serializers import ModelSerializer
from .models import Signin

class SigninSerializer(ModelSerializer):
    class Meta:
        model = Signin
        fields = '__all__'