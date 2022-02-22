from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from .forms import UserCreationForm
from django.contrib.auth.models import User
from django.contrib.auth import login


# Create your views here.


def index(request):
    if request.user.is_authenticated:
        return render(request, 'parties.html')
    else:
        return render(request, 'registration/login.html')


@login_required(login_url='/accounts/login/')
def party(request):
    return render(request, 'parties.html')


def welcomeParty(request):
    return render(request, 'welcome.html')


def register(request):
    form = UserCreationForm
    context = {
        'form': form,
    }
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        email = request.POST['email']

        user = User.objects.create_user(username, email, password)
        user.save()
        login(request, user)
        return render(request, 'parties.html')
    return render(request, 'register.html', context)
