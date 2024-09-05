from django.shortcuts import render

def index(request):  # Add comments or other code as needed
    return render(request, 'dist/index.html')