from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser

class CustomUserAdmin(UserAdmin):
    model = CustomUser
    # Customize the display of the user fields in the admin
    list_display = ['username', 'email', 'first_name', 'last_name', 'Aura', 'is_staff']
    fieldsets = UserAdmin.fieldsets + (
        (None, {'fields': ('Aura',)}),
    )
    add_fieldsets = UserAdmin.add_fieldsets + (
        (None, {'fields': ('Aura',)}),
    )

admin.site.register(CustomUser, CustomUserAdmin)
