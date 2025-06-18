from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from .models import CustomUser

class RegisterForm(UserCreationForm):
    name = forms.CharField(max_length=150, required=True, label='Имя')
    email = forms.EmailField(required=True, label='E-mail')

    class Meta:
        model = CustomUser
        fields = ('name', 'email', 'password1', 'password2')

class LoginForm(AuthenticationForm):
    username = forms.EmailField(label='E-mail')
    password = forms.CharField(widget=forms.PasswordInput, label='Пароль')