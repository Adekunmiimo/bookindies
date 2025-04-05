from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path


urlpatterns = [
    path("", views.home, name="home"),
    path("about/", views.about, name="about"),
    path("blog/", views.blog, name="blog"),
    path("contact/", views.contact, name="contact"),
    path("portfolio/", views.portfolio, name="portfolio"),
    path("services/", views.services, name="services"),
    path("book-cover/", views.book_cover, name="book_cover"),
    path("book_formarting/", views.book_formarting, name="book_formarting"),
    path("marketing/", views.marketing, name="marketing"),
    path("author/", views.author, name="author"),
    path("book_cover_genres/", views.book_cover_genres, name="book_cover_genres"),
]


# Serve media files in development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)