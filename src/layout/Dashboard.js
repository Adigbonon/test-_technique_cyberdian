import React from 'react'
import {
    Breadcrumbs,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Link,
    Typography,
    CardHeader,
    TableContainer, TableRow, TableHead, TableCell, TableBody, Table, Avatar
} from "@mui/material";
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import {
    PieChart,
    LineChart,
    Pie,
    Line,
    Tooltip,
    BarChart,
    XAxis,
    YAxis,
    Legend,
    CartesianGrid,
    Bar, Cell,
} from "recharts";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Paper from '@mui/material/Paper';
import ProgressBar from "../components/ProgressBar";
import EMPLOYES from "../assets/employes";


const data = [
    {
        mois: 'Janvier',
        nb_personnes: 2400
    },
    {
        mois: 'Février',
        nb_personnes: 1398
    },
    {
        mois: 'Mars',
        nb_personnes: 2000
    },
    {
        mois: 'Avril',
        nb_personnes: 3908
    },
    {
        mois: 'Mai',
        nb_personnes: 1890,
    },
    {
        mois: 'Juin',
        nb_personnes: 2390
    }
];

const revenu = [
    {
        mois: 'Janvier',
        revenu_par_mois: 200000
    },
    {
        mois: 'Février',
        revenu_par_mois: 140000
    },
    {
        mois: 'Mars',
        revenu_par_mois: 160000
    },
    {
        mois: 'Avril',
        revenu_par_mois: 300000
    },
    {
        mois: 'Mai',
        revenu_par_mois: 150000,
    },
    {
        mois: 'Juin',
        revenu_par_mois: 185000
    }
];

const profils = [
    { name: 'Ministres', value: 400 },
    { name: "Chefs d'entreprise", value: 300 },
    { name: 'Classe moyenne', value: 300 },
    { name: 'Etudiants', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};


function Dashboard() {
    return(
        <Grid container spacing={2}>

            <Grid item xs={2} ></Grid>

            <Grid item xs={10} >
                <br/>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        Home
                    </Link>
                    <Typography color="text.primary">Dashboard</Typography>
                </Breadcrumbs>
            </Grid>

            <Grid item xs={2} ></Grid>

            <Grid item xs={5} >
                <Card>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Nombre de visiteurs
                        </Typography>

                        <LineChart width={500} height={300} data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="mois" padding={{ left: 30, right: 30 }} />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="nb_personnes" stroke="#8884d8" activeDot={{ r: 8 }} />
                        </LineChart>

                    </CardContent>
                    <CardActions>
                        <Button size="small">Partager</Button>
                        <Button size="small">Imprimer</Button>
                    </CardActions>
                </Card>
            </Grid>

            <Grid item xs={5} >
                <Card>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Revenu €
                        </Typography>

                        <BarChart
                            width={500}
                            height={300}
                            data={revenu}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="mois" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="revenu_par_mois" fill="#8884d8" />
                        </BarChart>

                    </CardContent>
                    <CardActions>
                        <Button size="small">Partager</Button>
                        <Button size="small">Imprimer</Button>
                    </CardActions>
                </Card>
            </Grid>


            <Grid item xs={2} ></Grid>

            <Grid item xs={6} >
                <br/>
                <Typography variant="h5" gutterBottom component="div">
                    <u>Profil des clients</u>
                </Typography>

                <PieChart width={400} height={400}>
                    <Pie
                        data={profils}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                    >

                        {profils.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </Grid>

            <Grid item xs={2} >
                <br/>
                <Typography gutterBottom component="div">
                    <u>Légende</u>
                </Typography>
                <ul>
                    <li style={{ color: '#0088FE' }}>Ministres</li>
                    <li style={{ color: '#00C49F' }}>Chefs d'entreprise</li>
                    <li style={{ color: '#FFBB28' }}>Classe moyenne</li>
                    <li style={{ color: '#FF8042' }}>Etudiants</li>
                </ul>
            </Grid>

            <Grid item xs={2} ></Grid>

            <Grid item xs={2} ></Grid>

            <Grid item xs={2} >
                <Card sx={{ maxWidth: 345 }}>
                    <CardHeader
                        title="Intérêt sur Facebook"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image="https://img.freepik.com/photos-premium/fond-logo-facebook-3d-facebook-celebre-plateforme-medias-sociaux_73903-697.jpg"
                        alt="Facebook"
                    />
                    <CardContent>

                        <div>
                            <ThumbUpIcon/> : 200 000
                        </div>

                        <di>
                            <ShareIcon/> : 200
                        </di>

                        <br/>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={2} >
                <Card sx={{ maxWidth: 345 }}>
                    <CardHeader
                        title="Intérêt sur Instagram"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image="https://hdwallsource.com/img/2018/9/instagram-logo-wallpaper-65640-67872-hd-wallpapers.jpg"
                        alt="Instagram"
                    />
                    <CardContent>

                        <div>
                            <FavoriteIcon/> : 200 000
                        </div>

                        <di>
                            <ShareIcon/> : 200
                        </di>

                        <br/>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={2} >
                <Card sx={{ maxWidth: 345 }}>
                    <CardHeader
                        title="Intérêt sur Linkedin"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image="https://www.logo.wine/a/logo/LinkedIn/LinkedIn-Wordmark-White-Dark-Background-Logo.wine.svg"
                        alt="Linkedin"
                    />
                    <CardContent>

                        <div>
                            <ThumbUpIcon/> : 200 000
                        </div>

                        <di>
                            <ShareIcon/> : 200
                        </di>

                        <br/>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={2} >
                <Card sx={{ maxWidth: 345 }}>
                    <CardHeader
                        title="Intérêt sur Facebook"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image="https://img.freepik.com/photos-premium/fond-logo-facebook-3d-facebook-celebre-plateforme-medias-sociaux_73903-697.jpg"
                        alt="Facebook"
                    />
                    <CardContent>

                        <div>
                            <ThumbUpIcon/> : 200 000
                        </div>

                        <di>
                            <ShareIcon/> : 200
                        </di>

                        <br/>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={2} ></Grid>

            <Grid item xs={1} ></Grid>

            <Grid item xs={10} >
                <Typography variant="h5" gutterBottom component="div">
                    <br/> Suivi des employés
                </Typography>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Avatars</TableCell>
                                <TableCell align="right">Employés</TableCell>
                                <TableCell align="right">Villes</TableCell>
                                <TableCell align="right">Rangs</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {EMPLOYES.map((row, idx) => (
                                <TableRow
                                    key={row.nom}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        <Avatar alt={row.ville} src={row.photo} />
                                    </TableCell>
                                    <TableCell align="right">{row.nom}</TableCell>
                                    <TableCell align="right">{row.ville}</TableCell>
                                    <TableCell align="right">
                                        <ProgressBar key={idx} bgcolor={row.temps_mensuel > 70 ? "#2eb85c" : "#e55353"} completed={row.temps_mensuel} />
                                    </TableCell>
                                    <TableCell align="right">{row.rang}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>

            <Grid item xs={1} ></Grid>

        </Grid>
    )
}

export default Dashboard;
