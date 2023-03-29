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
        $product = new Product();
        $product->setNom($faker->word());
        $product->setPrix($faker->randomFloat(2));
        $product->setCreatedAt($faker->dateTime());

        $manager->persist($product);



        $product1 = new Product();
        $product1->setNom($faker->word());
        $product1->setPrix($faker->randomFloat(2));
        $product1->setCreatedAt($faker->dateTime());

        $product->setCategory($this->getReference('category'));
        $product1->setCategory($this->getReference('category1'));

        $manager->persist($product1);


        $manager->flush();
    }
}
