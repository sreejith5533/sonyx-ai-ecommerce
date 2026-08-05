from storages.backends.s3 import S3Storage
from django.conf import settings


class MediaStorage(S3Storage):
    bucket_name = settings.AWS_STORAGE_BUCKET_NAME
    default_acl = None
    file_overwrite = False
    querystring_auth = False

    def url(self, name, parameters=None, expire=None, http_method=None):
        return f"{settings.SUPABASE_URL}/storage/v1/object/public/{self.bucket_name}/{name}"


    