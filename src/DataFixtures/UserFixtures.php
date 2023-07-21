<?php

namespace App\DataFixtures;

use Faker;
use App\Entity\User;
use DateTime;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserFixtures extends Fixture
{


    private $userPasswordHasher;

    public function __construct(UserPasswordHasherInterface $userPasswordHasher)
    {
        $this->userPasswordHasher = $userPasswordHasher;
    }

    public function load(ObjectManager $manager): void
    {
        $faker = Faker\Factory::create('fr_FR');

        for ($i = 0; $i < 5; $i++) {
            $user = new User();
            $user->setNom($faker->word);
            $user->setEmail($faker->email);
            $user->setPassword($this->userPasswordHasher->hashPassword($user, '123456'));
            $user->setRoles(['ROLE_USER']);
            $manager->persist($user);
        }

        for ($i = 0; $i < 2; $i++) {
            $admin = new User();
            $admin->setNom($faker->word);
            $admin->setEmail($faker->email);
            $admin->setPassword($this->userPasswordHasher->hashPassword($admin, '123456'));
            $admin->setRoles(['ROLE_ADMIN']);
            $manager->persist($admin);
        }
        $manager->flush();
    }
}
