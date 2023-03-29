<?php

namespace App\DataFixtures;

use Faker;
use App\Entity\Category;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class CategoryFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $faker = Faker\Factory::create('fr_FR');
        $category = new Category();
        $category->setNom($faker->word());
        $manager->persist($category);


        $category1 = new Category();
        $category1->setNom($faker->word());
        $manager->persist($category1);

        $this->addReference('category', $category);
        $this->addReference('category1', $category1);

        $manager->flush();
    }
}
