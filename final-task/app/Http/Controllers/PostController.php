<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    //This is the code

    public function index(){
        return Inertia::render("pages/Home/Home");
    }
}