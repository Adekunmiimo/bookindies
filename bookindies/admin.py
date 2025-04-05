from django.contrib import admin


from .models import PortfolioImage
admin.site.register(PortfolioImage)


from .models import BookGenresImage

@admin.register(BookGenresImage)
class BookGenresImageAdmin(admin.ModelAdmin):
    list_display = ['title', 'genre']
    list_filter = ['genre']
