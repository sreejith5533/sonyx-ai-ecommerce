from decimal import Decimal


def calculate_cart_total(cart_items):
  subtotal = Decimal("0")

  for item in cart_items:
    subtotal += item.product.price * item.quantity

  tax = subtotal * Decimal("0.05")

  shipping = (Decimal("0")  if subtotal == Decimal("0") or subtotal > Decimal("1000") else Decimal("100"))

  discount = Decimal("500") if subtotal > Decimal("2000") else Decimal("0")

  total  = subtotal + tax + shipping - discount



  return {
      "subtotal": subtotal,
      "tax": tax,
      "shipping": shipping,
      "discount": discount,
      "total": total
  }