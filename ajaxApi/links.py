from django.urls import path
from . import views

urlpatterns = [
    path('', views.home_page, name = "home-page"),
    path('get_all_products', views.get_all_products, name="get_all_products"),
]