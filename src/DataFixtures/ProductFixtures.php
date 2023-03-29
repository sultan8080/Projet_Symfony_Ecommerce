<?php

namespace App\DataFixtures;

use DateTime;
use Faker\Factory;
use Faker;
use App\Entity\Product;
use App\Entity\Category;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class ProductFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $faker = Faker\Factory::create('fr_FR');

        for ($i = 0; $i < 50; $i++) {
            $product = new Product();
            $product->setNom($faker->word);
            $product->setPrix($faker->randomFloat(2));
            $product->setSlug($faker->slug());
            $product->setCreatedAt($faker->dateTime());
            $product->setOnline(true);
            $product->setImage($faker->imageUrl(640, 480, 'animals', true));
            $product->setDescription($faker->text(100));
            $product->setSousTitre($faker->sentence());
            $product->setCategory($this->getReference('category-' . $faker->numberBetween(1, 4)));
            $manager->persist($product);
        }

        $manager->flush();
    }
}
