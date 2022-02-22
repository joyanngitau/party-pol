from django.urls import path
from . import views

app_name = 'app'

urlpatterns = [
    path('', views.index, name='home'),
    path('register/', views.register, name='register'),
    path('party/', views.party, name='party'),
    path('chosen-one/', views.welcomeParty, name='chosen'),
]