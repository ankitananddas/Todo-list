# Generated by Django 4.0.4 on 2022-05-20 03:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0002_task_deadline'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='deadline',
            field=models.DateTimeField(auto_now=True),
        ),
    ]