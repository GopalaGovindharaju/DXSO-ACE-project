from backend.models import machine_assest

class CustomerSerializer(ModelSerializer):
    class Meta:
        model = machine_assest
        fields = '__all__'