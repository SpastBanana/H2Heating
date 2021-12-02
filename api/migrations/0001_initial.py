# Generated by Django 3.2.7 on 2021-11-30 13:53

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='deltaStatus',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('time', models.DateTimeField(auto_now_add=True)),
                ('meting_id', models.CharField(max_length=20)),
                ('TA1', models.FloatField()),
                ('TA2', models.FloatField()),
                ('TA1_2', models.FloatField()),
                ('TAP', models.FloatField()),
                ('TB1', models.FloatField()),
                ('TB2', models.FloatField()),
                ('TB1_2', models.FloatField()),
                ('TBP', models.FloatField()),
                ('TC1', models.FloatField()),
                ('TC2', models.FloatField()),
                ('TC1_2', models.FloatField()),
                ('TCP', models.FloatField()),
                ('TD1', models.FloatField()),
                ('TD2', models.FloatField()),
                ('TD1_2', models.FloatField()),
                ('TDP', models.FloatField()),
                ('flow_1', models.FloatField()),
                ('flow_2', models.FloatField()),
                ('flow_3', models.FloatField()),
                ('flow_H2', models.FloatField()),
            ],
            options={
                'verbose_name_plural': 'Metingen',
            },
        ),
    ]
