@extends('layouts/app')

@section('content')
    <div class="container">
        <div class="row" style="flex-direction: column;">
            <div v-if="articles.length > 0" class="col-md-8 col-md-offset-2">
                <div class="panel panel-default" style="padding: 30px 15px;">
                    <div class="panel-heading">{{ $article->author }}</div>

                    <div class="panel-body">
                        {{ $article->body }}
                    </div>

                    <a class="btn btn-default" href="/">Go BACK</a>
                </div>
            </div>
        </div>
    </div>
@endsection
