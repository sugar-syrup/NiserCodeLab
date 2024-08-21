from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework import status
from django.contrib.auth import authenticate
from django.contrib.auth.models import update_last_login
from rest_framework.permissions import AllowAny
from rest_framework.permissions import IsAuthenticated


class CustomUserLoginView(APIView):
    permission_classes = [AllowAny]  # Allow anyone to access this view

    def post(self, request, *args, **kwargs):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(username=username, password=password)

        if user is not None:
            token, created = Token.objects.get_or_create(user=user)
            update_last_login(None, user)
            return Response({'token': token.key}, status=status.HTTP_200_OK)
        return Response({'error': 'Invalid Credentials'}, status=status.HTTP_400_BAD_REQUEST)


class CustomUserLogoutView(APIView):
    permission_classes = [IsAuthenticated]  # Only authenticated users can access this view

    def post(self, request, *args, **kwargs):
        try:
            # Get the user's token and delete it
            request.user.auth_token.delete()
            return Response({'message': 'Successfully logged out.'}, status=status.HTTP_200_OK)
        except Token.DoesNotExist:
            return Response({'error': 'Invalid token or already logged out.'}, status=status.HTTP_400_BAD_REQUEST)