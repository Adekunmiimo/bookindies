from django.shortcuts import render

def home(request):
    return render(request, "home.html")

def about(request):
    return render(request, "about.html")

def blog(request):
    return render(request, "blog.html")

def contact(request):
    return render(request, "contact.html")

def portfolio(request):
    return render(request, "portfolio.html")

def services(request):
    return render(request, "services.html")

def book_cover(request):
    return render(request, "book_cover.html")

def book_formarting(request):
    return render(request, "book_formarting.html")



from django.shortcuts import render, redirect
from django.core.mail import send_mail
from django.contrib import messages

# def subscribe_newsletter(request):
#     if request.method == "POST":
#         name = request.POST.get("name")
#         email = request.POST.get("email")

#         # You can store this in the database or an email marketing service
#         # Example: Sending an email confirmation
#         send_mail(
#             "Newsletter Subscription",
#             f"Hello {name},\n\nThank you for subscribing to our newsletter!",
#             "admin@yourwebsite.com",
#             [email],
#             fail_silently=False,
#         )

#         messages.success(request, "You have successfully subscribed!")
#         return redirect("home")

#     return render(request, "blog-section.html")
