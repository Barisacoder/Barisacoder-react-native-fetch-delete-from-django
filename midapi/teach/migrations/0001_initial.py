# Generated by Django 4.1.4 on 2022-12-29 19:38

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='teach',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fName', models.CharField(max_length=100)),
                ('lName', models.CharField(max_length=100)),
                ('dept', models.CharField(max_length=100)),
                ('salary', models.IntegerField()),
            ],
        ),
    ]
