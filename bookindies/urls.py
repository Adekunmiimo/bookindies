from django.urls import path
from . import views

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
]
