# Generated by Django 3.2.7 on 2021-09-21 15:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_auto_20210921_1542'),
    ]

    operations = [
        migrations.AlterField(
            model_name='deltastatus',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
