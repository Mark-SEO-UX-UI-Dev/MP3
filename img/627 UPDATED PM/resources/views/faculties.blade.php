<html lang="en">

<head>
    @include("layouts/head")
    <title>Faculties</title>
</head>
<body>
    <img src="https://external-preview.redd.it/p9_LBMMn22djOrg9XGS2wIcQh2zRyBELz6zhmSUZUSg.jpg?auto=webp&s=6ae3d505c2f1ff1b15122036003fee77b283615e" style="width:120px"/>
    <h1>Faculties List</h1>
    <table class="table">
        <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Faculty ID</th>
        </tr>
        @foreach ($faculties as $f)
        <tr>
            <td>{{$f -> last_name}}, {{$f -> first_name}}</td>
            <td>{{$f -> department}}</td>
            <td>{{$f -> faculty_id}}</td>
        </tr>
        @endforeach
    </table>
    <h1>Faculty Data</h1>
    <h2>Departments</h2>
    <table class="table">
        <tr>
            <th>Department</th>
            <th>Total Faculty</th>
        </tr>
        @foreach ($dept_faculties as $df)
        <tr>
            <td>{{$df -> department}}</td>
            <td>{{$df -> count_dept}}
        </tr>
        @endforeach
    </table>
    <h2>Promotions</h2>
    <table class="table">
        <tr>
            <th>Name</th>
            <th>Academe Points</th>
        </tr>
        @foreach ($pts_faculties as $pf)
        <tr>
            <td>{{$pf -> last_name}}, {{$pf -> first_name}}</td>
            <td>{{$pf -> academe_points}}</td>
        </tr>
        @endforeach
    </table>
    @include("layouts/footer")
</html>