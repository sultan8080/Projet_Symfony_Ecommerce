<?php

namespace App\Controller\Admin;

use App\Entity\Product;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use EasyCorp\Bundle\EasyAdminBundle\Field\SlugField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\MoneyField;
use EasyCorp\Bundle\EasyAdminBundle\Field\NumberField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;

class ProductCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Product::class;
    }


    public function configureFields(string $pageName): iterable
    {
        return [
            NumberField::new('id')->hideOnForm(),
            TextField::new('nom'),
            TextField::new('sousTitre'),
            SlugField::new('slug')->setTargetFieldName('nom'),
            MoneyField::new('prix')->setCurrency('EUR'),
            TextField::new('image'),
            DateField::new('createdAt')->setFormat('dd.MMMM.yyyy'),
            AssociationField::new('category'),
            BooleanField::new('online')->renderAsSwitch(true),
            DateField::new('updatedAt')->setFormat('dd.MMMM.yyyy')->hideOnForm(),
            TextEditorField::new('description')
        ];
    }
}
