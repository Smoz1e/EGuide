from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from .models import CustomUser

class RegisterForm(UserCreationForm):
    name = forms.CharField(max_length=150, required=True, label='Имя')
    email = forms.EmailField(required=True, label='E-mail')
    date_of_birth = forms.DateField(required=False, label='Дата рождения', widget=forms.DateInput(attrs={'type': 'date'}))

    class Meta:
        model = CustomUser
        fields = ('name', 'email', 'date_of_birth', 'password1', 'password2')

class LoginForm(AuthenticationForm):
    username = forms.EmailField(label='E-mail')
    password = forms.CharField(widget=forms.PasswordInput, label='Пароль')

class ProfileEditForm(forms.ModelForm):
    date_of_birth = forms.DateField(required=False, label='Дата рождения', widget=forms.DateInput(attrs={'type': 'date'}))
    email = forms.EmailField(label='E-mail')
    name = forms.CharField(label='Имя')

    class Meta:
        model = CustomUser
        fields = ['name', 'email', 'date_of_birth']