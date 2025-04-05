from django.shortcuts import render

def home(request):
    return render(request, "home.html")

def about(request):
    return render(request, "about.html")

def blog(request):
    return render(request, "blog.html")

def contact(request):
    return render(request, "contact.html")

from django.core.paginator import Paginator
from django.http import JsonResponse
from django.template.loader import render_to_string
from django.shortcuts import render
from .models import PortfolioImage


def portfolio(request):
    images = PortfolioImage.objects.all().order_by('-id')
    page = int(request.GET.get("page", 1))
    paginator = Paginator(images, 12)
    page_obj = paginator.get_page(page)

    if request.headers.get('x-requested-with') == 'XMLHttpRequest':
        # Use the same block of HTML you use for rendering the grid items
        html = ""
        for img in page_obj:
            html += f'''
            <div class="portfolio-gallery-item">
              <img src="{img.image.url}" alt="{img.title}">
            </div>
            '''
        return JsonResponse({'html': html, 'has_next': page_obj.has_next()})

    return render(request, "portfolio.html", {
        'images': page_obj,
        'has_next': page_obj.has_next(),
    })


def services(request):
    return render(request, "services.html")

def book_cover(request):
    return render(request, "book_cover.html")

def book_formarting(request):
    return render(request, "book_formarting.html")

def marketing(request):
    return render(request, "marketing.html")

def author(request):
    return render(request, "author.html")


from django.core.paginator import Paginator
from django.http import JsonResponse
from django.template.loader import render_to_string
from django.shortcuts import render
from .models import BookGenresImage

def book_cover_genres(request):
    genre = request.GET.get("category")
    page = int(request.GET.get("page", 1))

    covers = BookGenresImage.objects.all()

    if genre:
        covers = covers.filter(genre=genre)

    paginator = Paginator(covers, 12)
    page_obj = paginator.get_page(page)

    context = {
        "covers": page_obj,
        "selected_genre": genre,
        "has_next": page_obj.has_next()
    }

    if request.headers.get("x-requested-with") == "XMLHttpRequest":
        html = render_to_string("book_cover_genres.html", {**context, "ajax": True})
        return JsonResponse({"html": html, "has_next": page_obj.has_next()})

    return render(request, "book_cover_genres.html", context)
