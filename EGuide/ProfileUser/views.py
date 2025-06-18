from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from RegisterAndAutor.forms import ProfileEditForm
from django.contrib import messages

@login_required
def profile_view(request):
    user = request.user
    if request.method == 'POST':
        form = ProfileEditForm(request.POST, request.FILES, instance=user)
        if form.is_valid():
            form.save()
            messages.success(request, 'Профиль успешно обновлён!')
        else:
            messages.error(request, 'Ошибка при сохранении профиля.')
    else:
        form = ProfileEditForm(instance=user)
    return render(request, 'profile.html', {'user': user, 'form': form})

# Create your views here.
