# Generated by Django 4.0.4 on 2022-05-20 05:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0004_task_endtime'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='deadline',
            field=models.DateTimeField(),
        ),
    ]
