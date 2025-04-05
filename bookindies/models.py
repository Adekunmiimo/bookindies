# models.py
from django.db import models

class PortfolioImage(models.Model):
    image = models.ImageField(upload_to='portfolio/')
    title = models.CharField(max_length=100)

    def __str__(self):
        return self.title


class BookGenresImage(models.Model):
    GENRE_CHOICES = [
        ('fiction', 'Fiction'),
        ('non-fiction', 'Non-Fiction'),
        ('christian', 'Christian'),
        ('romance', 'Romance'),
        ('how-to', 'How To'),
        ('illustration', 'Illustration'),
        ('mystery', 'Mystery'),
        ('sci-fi', 'Sci-Fi'),
        ('thriller', 'Thriller'),
        ('fantasy', 'Fantasy'),
        ('history', 'History'),
        ('biography', 'Biography'),
    ]

    image = models.ImageField(upload_to='book_covers/')
    title = models.CharField(max_length=100)
    genre = models.CharField(max_length=20, choices=GENRE_CHOICES)

    def __str__(self):
        return f"{self.title} ({self.genre})"
