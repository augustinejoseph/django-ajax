from django.shortcuts import render, HttpResponse

# Create your views here.

def home_page(request):
    return render(request ,'home.html')


def get_all_products(request):
    api_url = "https://fakestoreapi.com/products"
    products = request.get(api_url)
    print(products)