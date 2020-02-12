<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

use App\Whiskey;

class WhiskeyTest extends TestCase
{
    use RefreshDatabase;

    public function testCreateWhiskey()
    {
        $whiskey = factory(Whiskey::class)->create();

        $this->assertDatabaseHas('whiskeys', $whiskey->toArray());
    }
}
