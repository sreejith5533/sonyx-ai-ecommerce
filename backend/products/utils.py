from django.conf import settings


def media_url(path):
    if not path:
        return None

    return f"{settings.SUPABASE_URL}/storage/v1/object/public/media/{path}"