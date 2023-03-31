<?php

namespace App\Controller;

use App\Service\CartService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CartController extends AbstractController
{

    #[Route('/mon-panier', name: 'panier_card')]
    public function index(CartService $cartService): Response
    {
        // dd($cartService->getTotal());
        return $this->render('cart/index.html.twig', [
            'cart' => $cartService->getTotal()
        ]);
    }

    #[Route('/mon-panier/{id<\d+>}', name: 'mon_panier')]
    public function addToRoute(CartService $cartService, int $id): Response
    {
        $cartService->addToCart($id);
        return $this->redirectToRoute("panier_card");
    }
}
